import { Db, ObjectId, Collection } from "mongodb";
import { HttpError } from "../../errors/HttpError";

export abstract class QueryService<T extends { _id?: ObjectId | string }> {
  protected collection: Collection<T>;

  constructor(protected db: Db, protected collectionName: string) {
    this.collection = db.collection<T>(collectionName);
  }

  async getById(id: string): Promise<T> {
    const result = await this.collection.findOne({ _id: new ObjectId(id) } as any);
    if (!result) {
      throw new HttpError(404, "Item não encontrado.");
    }
    return { ...result, _id: result._id?.toString() } as T;
  }

  async list(filter: Partial<T> = {}): Promise<T[]> {
    const results = await this.collection.find(filter as any).toArray();
    return results.map(doc => ({ ...doc, _id: doc._id?.toString() } as T));
  }
}
