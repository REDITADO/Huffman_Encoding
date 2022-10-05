const { closeDelimiter } = require("ejs")

const queue=[]
const freq ={}
const lib =[]
class HuffmanTree{
    constructor(){
        this.root=null
        this.freq = null
        this.left =null
        this.right = null
    }
}

function createPriorityQueue(Phrase){
const array = Phrase.split("")
console.log(array)
for(let char=0;char<array.length;char++){
    if(freq[array[char]]){
        freq[array[char]]+=1
    }else{
        freq[array[char]] = 1
    }
}
for(let q in freq){
const letter = new HuffmanTree()
letter.freq = freq[q]
letter.root = q
letter.right = null
letter.left = null
queue.push(letter)
}
queue.sort(function(a,b){
    return a.freq-b.freq
})
}

function createRoot(){
    let root =null
    let nChar = queue.length

    while(queue.length >1){
        let x=queue[0]
        queue.shift()

        let y=queue[0]
        queue.shift()

        const tree = new HuffmanTree()
        tree.freq = x.freq +y.freq

        tree.root= "-"
        
        tree.left = x
        tree.right = y

        root = tree
        queue.push(tree)
        queue.sort(function(a,b){
            return a.freq-b.freq
        })
    }
    print(root,"")
}
function print(root,code){
    if(root==null){
        return
    }
    if(root.left ==null && root.right ==null&& (root.root).toLowerCase()!= (root.root).toUpperCase()){
        console.log(root.root+":"+code)
        lib.push(code)
        return root.root
    }
    print(root.left,code+"0")
    print(root.right,code+"1")
}
function decoder(c,root,i,j){
    let c1 = c[j]
    if(c1){
        let code = c1[i]
        if(code=="0" && root.left!=null){
            decoder(lib,root.left,i+1,j)
        }else if(code=="1" && root.right!=null){
            decoder(lib,root.right,i+1,j)
        }else{
            console.log(root.root,root.freq)
            decoder(lib,queue[0],i=0,j+1)
        }
    }else{
        return
    }
    
}
createPriorityQueue("ola")
createRoot()
decoder(lib,queue[0],0,0)
