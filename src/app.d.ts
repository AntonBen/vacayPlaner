/// <reference types="@sveltejs/kit" />
import type { Connection } from "mysql2/promise";



// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  declare namespace App {
  interface Locals {
    userid: string;
    db: Connection;
  }
}


  // interface Platform {}

  // interface Session {}

  // interface Stuff {}
}
