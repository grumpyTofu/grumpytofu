import { connect, Connection } from "mongoose";
import { BlogPostService } from "./blog-posts/blog-post.service";

export class DataService {
  private readonly dbUri: string;
  private readonly dbUser: string;
  private readonly dbPass: string;

  db?: Connection["db"];
  blogPosts?: BlogPostService;

  constructor() {
    const dbUri = process.env.DB_URI;
    const dbUser = process.env.DB_USER;
    const dbPass = process.env.DB_PASS;

    if (!dbUri) throw "DB_URI not set. Please set in order to run application.";
    if (!dbUser) throw "DB_USER not set. Please set in order to run application.";
    if (!dbPass) throw "DB_PASS not set. Please set in order to run application.";

    this.dbUri = dbUri;
    this.dbUser = dbUser;
    this.dbPass = dbPass;
  }

  async init() {
    const mongo = await connect(this.dbUri, {
      dbName: "portfolio",
      user: this.dbUser,
      pass: this.dbPass,
      retryWrites: true,
    });

    this.db = mongo.connection.db;
    this.blogPosts = new BlogPostService();
  }
}
