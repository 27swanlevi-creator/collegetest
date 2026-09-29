import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {extname,join,normalize} from 'node:path';
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'};
createServer(async(req,res)=>{try{const path=normalize(req.url==='/'?'/index.html':req.url).replace(/^\.\.\//,'');const body=await readFile(join(process.cwd(),path));res.writeHead(200,{'content-type':types[extname(path)]||'application/octet-stream'});res.end(body)}catch{res.writeHead(404);res.end('Not found')}}).listen(process.env.PORT||4173,()=>console.log('Major Minus running'));
