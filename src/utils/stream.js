export const putSubscriptions = (storage, ...subscriptions) => {
  if (!storage instanceof Array) throw Error('Invalid storage.')

  subscriptions.forEach(subscription => {
    storage.push(subscription)
  })
}

export const unsubscribeAll = (storage) => {
  storage.forEach(subscription => {
    if (subscription && typeof subscription.unsubscribe === 'function') {
      subscription.unsubscribe()
    }
  })
}
