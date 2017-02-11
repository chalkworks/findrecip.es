import firebase from 'firebase'

const get = (id) => {
  return firebase.database()
  .ref(`user/${id}`)
  .once('value')
  .then((snapshot) => {
    return snapshot.val()
  })
}

const set = (id, data) => {
  return firebase.database()
  .ref(`user/${id}`)
  .set(data)
}

const create = (data) => {
  return firebase.database()
  .ref(`user/${data.uid}`)
  .set(data)
}

const createByFacebook = (data) => {
  let profile = {
    name: data.displayName,
    email: data.email,
    photoURL: data.photoURL,
    description: '',
    type: 'facebook'
  }

  return firebase.database()
  .ref(`user/${data.uid}`)
  .set(profile)
}

const createByGooglePlus = (data) => {
  let profile = {
    name: data.displayName,
    email: data.email,
    photoURL: data.photoURL,
    description: '',
    type: 'googleplus'
  }

  return firebase.database()
  .ref(`user/${data.uid}`)
  .set(profile)
}

const subscribe = (id, callback) => {
  return firebase.database()
  .ref(`user/${id}`)
  .on('value', (snapshot) => {
    callback(snapshot.val())
  })
}

export default {
  get,
  set,
  createByFacebook,
  createByGooglePlus,
  create,
  subscribe
}
