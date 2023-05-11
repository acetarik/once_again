migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ar4fs2filc4d7lz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fbtixdke",
    "name": "dateTime",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ar4fs2filc4d7lz")

  // remove
  collection.schema.removeField("fbtixdke")

  return dao.saveCollection(collection)
})
