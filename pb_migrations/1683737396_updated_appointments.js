migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gr8zwzkd1x50kys")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gr8zwzkd1x50kys")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
