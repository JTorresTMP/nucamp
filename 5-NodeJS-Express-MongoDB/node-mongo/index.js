const MongoClient = require('mongodb').MongoClient;
const assert = require('assert').strict;

const url = 'mongodb://localhost:27017/';
const dbname = 'nucampsite';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    assert.strictEqual(err, null); //results in error if they are not equal

    console.log('Connected correctly to the server');

    const db = client.db(dbname);

    db.dropCollection('campsites', (err, result) => {
        assert.strictEqual(err, null);
        console.log('Dropped collection', result);

        const collection = db.collection('campsites');

        collection.insert(
            { name: 'Breadcrumb Trail Campground', description: 'Test' },
            (err, result) => {
                assert.strictEqual(err, null);
                console.log('Insert Document', result.ops); //Not sure what this .ops is

                collection.find().toArray((err, docs) => {
                    assert.strictEqual(err, null);
                    console.log('Found documents', docs);

                    client.close();
                });
            }
        );
    });
});
