module.exports=function(t){return{transformIncoming:e=>e.scheme==="vscode-remote"?{scheme:"file",path:e.path,query:e.query,fragment:e.fragment}:e.scheme==="file"?{scheme:"vscode-local",path:e.path,query:e.query,fragment:e.fragment}:e,transformOutgoing:e=>e.scheme==="file"?{scheme:"vscode-remote",authority:t,path:e.path,query:e.query,fragment:e.fragment}:e.scheme==="vscode-local"?{scheme:"file",path:e.path,query:e.query,fragment:e.fragment}:e,transformOutgoingScheme:e=>e==="file"?"vscode-remote":e==="vscode-local"?"file":e}};

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/38f6d7875e3195bdaee448d2cb6917f3ae4994af/core/vs/server/uriTransformer.js.map