import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
const directory = path.join(process.cwd(), 'content/posts');
export type Post = {slug:string;title:string;description:string;date:string;updatedAt?:string;category:string;tags:string[];featured:boolean;readingMinutes:number;body:string};
function parseFile(filename:string): Post | null {
 const raw=fs.readFileSync(path.join(directory,filename),'utf8');
 const {data,content}=matter(raw);
 if(data.status !== 'published') return null;
 const slug=path.basename(filename,'.mdx');
 return {slug,title:String(data.title||slug),description:String(data.description||''),date:String(data.date||''),updatedAt:data.updatedAt?String(data.updatedAt):undefined,category:String(data.category||''),tags:Array.isArray(data.tags)?data.tags.map(String):[],featured:!!data.featured,readingMinutes:Math.max(1,Math.ceil(readingTime(content).minutes)),body:content};
}
export function getPosts():Post[]{if(!fs.existsSync(directory))return [];return fs.readdirSync(directory).filter(x=>x.endsWith('.mdx')).map(parseFile).filter((x):x is Post=>x!==null).sort((a,b)=>b.date.localeCompare(a.date));}
export function getPost(slug:string):Post|undefined{return getPosts().find(p=>p.slug===slug);}
