migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ar4fs2filc4d7lz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jvmzbz0r",
    "name": "concerns",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ar4fs2filc4d7lz")

  // remove
  collection.schema.removeField("jvmzbz0r")

  return dao.saveCollection(collection)
})
