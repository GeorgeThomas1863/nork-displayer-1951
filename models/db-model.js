//import mongo
import * as db from "../data/db.js";

//connect to db AGAIN here just to be safe
await db.dbConnect();

class dbModel {
  constructor(dataObject, collection) {
    this.dataObject = dataObject;
    this.collection = collection;
  }

  //STORE STUFF

  async storeAny() {
    // await db.dbConnect();
    const storeData = await db.dbGet().collection(this.collection).insertOne(this.dataObject);
    return storeData;
  }

  async storeUniqueURL() {
    // await db.dbConnect();
    await this.urlNewCheck(); //check if new

    const storeData = await this.storeAny();
    return storeData;
  }

  //------------------

  //GET STUFF

  async getAll() {
    const arrayData = await db.dbGet().collection(this.collection).find().toArray();
    return arrayData;
  }

  //unique array
  async getUniqueArray() {
    const { keyToLookup, itemValue } = this.dataObject;
    console.log("!!!!!!!!!!DB MODEL!!!!!!!!!!!");
    console.log(keyToLookup);
    console.log(itemValue);
    console.log(this.collection);
    const dataArray = await db.dbGet().collection(this.collection).find({ [keyToLookup]: ObjectId(itemValue) }).toArray(); //prettier-ignore
    console.log("DB MODEL RETURN");
    console.log(dataArray);
    return dataArray;
  }
}

export default dbModel;
