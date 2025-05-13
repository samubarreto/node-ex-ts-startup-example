import { Db, ObjectId, OptionalUnlessRequiredId } from "mongodb";
import { HttpError } from "../../errors/HttpError";
import { QueryService } from "./QueryService";

export abstract class CrudService<T extends { _id?: ObjectId }> extends QueryService<T> {
  constructor(db: Db, collectionName: string) {
    super(db, collectionName);
  }

  async create(data: Omit<T, "_id">): Promise<T> {
    const { _id, ...dataWithoutId } = data as T;
    const result = await this.collection.insertOne({ ...dataWithoutId } as OptionalUnlessRequiredId<T>);
    if (!result.insertedId) {
      throw new HttpError(500, "Falha ao inserir documento.");
    }
    return { ...data, _id: result.insertedId } as T;
  }

  async update(id: string, data: Partial<T>): Promise<void> {
    const result = await this.collection.updateOne(
      { _id: new ObjectId(id) } as any,
      { $set: data }
    );
    if (result.matchedCount === 0) {
      throw new HttpError(404, "Item para atualizar não encontrado.");
    }
  }

  async delete(id: string): Promise<void> {
    const result = await this.collection.deleteOne({ _id: new ObjectId(id) } as any);
    if (result.deletedCount === 0) {
      throw new HttpError(404, "Item para deletar não encontrado.");
    }
  }
}
