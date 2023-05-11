migrate((db) => {
  const collection = new Collection({
    "id": "ar4fs2filc4d7lz",
    "created": "2023-05-08 18:49:15.857Z",
    "updated": "2023-05-08 18:49:15.857Z",
    "name": "appointments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4nxzothi",
        "name": "consultant",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "c5ie69lhdjfxbrt",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "8fet0ghq",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ar4fs2filc4d7lz");

  return dao.deleteCollection(collection);
})
