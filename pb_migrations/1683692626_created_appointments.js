migrate((db) => {
  const collection = new Collection({
    "id": "gr8zwzkd1x50kys",
    "created": "2023-05-10 04:23:46.225Z",
    "updated": "2023-05-10 04:23:46.225Z",
    "name": "appointments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ne1fcbor",
        "name": "date_time",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "24rtajbo",
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
      },
      {
        "system": false,
        "id": "gpatqrd6",
        "name": "consultant",
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
  const collection = dao.findCollectionByNameOrId("gr8zwzkd1x50kys");

  return dao.deleteCollection(collection);
})
