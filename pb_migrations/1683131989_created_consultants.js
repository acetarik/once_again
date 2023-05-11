migrate((db) => {
  const collection = new Collection({
    "id": "c5ie69lhdjfxbrt",
    "created": "2023-05-03 16:39:49.518Z",
    "updated": "2023-05-03 16:39:49.518Z",
    "name": "consultants",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r9lkpyus",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6lo9dzuv",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "8hn8hdog",
        "name": "password",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("c5ie69lhdjfxbrt");

  return dao.deleteCollection(collection);
})
