<template>
  <form class="ui form" @submit.prevent="save">

    <div class="ui center aligned grid">
      <div class="row">
        <img :src="photoURL" alt="" class="ui circular image a-medium">
        <input ref="file" @change="selectedFile" type="file" style="display: none;">
        <br>
      </div>
    </div>

    <br>
    <div class="row" v-if="uploading">
      <div ref="progress" class="ui progress">
        <div class="bar">
          <div class="progress"></div>
        </div>
        <div class="label">Uploading File...</div>
      </div>
    </div>
    <br>
    <div class="ui two column centered grid">
      <div @click="$refs.file.click()" class="ui positive submit button">Select Photo</div>
    </div>

    <br>
    <br>

    <div class="field">
      <label>Name</label>
      <input v-model="name">
    </div>
    <div class="field">
      <label>Email</label>
      <input v-model="email">
    </div>
    <div class="field">
      <label>Description</label>
      <input v-model="description">
    </div>

    <div class="ui buttons">
      <div class="ui red button" @click="$emit('cancel')">Cancel</div>
      <div class="or"></div>
      <div @click="save" class="ui positive submit button">Save</div>
    </div>

    <upload-modal ref="upload"></upload-modal>

  </form>
</template>

<style>
  img.circular.image {
    width: 120px;
    height: 120px;
  }  
</style>

<script>
  import UploadModal from './UploadModal'
  import firebase from 'firebase'

  export default {
    components: {
      UploadModal
    },
    props: ['value'],
    data: () => ({
      name: '',
      email: '',
      description: '',
      photoURL: '',
      uploading: false
    }),
    created () {
      this.name = this.value.name
      this.email = this.value.email
      this.description = this.value.description
      this.photoURL = this.value.photoURL
    },
    watch: {
      value () {
        this.name = this.value.name
        this.email = this.value.email
        this.description = this.value.description
        this.photoURL = this.value.photoURL
      }
    },
    methods: {
      save () {
        this.$emit('input', {
          name: this.name,
          email: this.email,
          description: this.description,
          photoURL: this.photoURL
        })
        this.$emit('save')
      },
      openUpload () {
        this.$refs.upload.open()
      },
      selectedFile () {
        const file = this.$refs.file.files[0]
        const metadata = {
          contentType: 'image/jpeg'
        }
        const uploadTask = firebase.storage().ref(`image/${file.name}`).put(file, metadata)
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (percent) => {
          let progress = (percent.bytesTransferred / percent.totalBytes) * 100
          this.uploading = true
          $(this.$refs.progress).progress({ percent: progress })
        })
        uploadTask.then((snapshot) => {
          this.uploading = false
          this.photoURL = snapshot.downloadURL
        })
      }
    }
  }
</script>