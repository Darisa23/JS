"https://jsonplaceholder.typicode.com/posts"

interface Post {
"userId": number,
"id": number,
"title": string,
"body": string,
    }

async function mein(){
    
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data : Array<Post> = await res.json()
    // 1. Filtrar posts del userId = 1.
    const filtered = data.filter(reg => reg.userId == 1)
    // 2. Mapear solo los títulos de los posts.
    const titles = data.map(bb=>bb.title)
    //console.log(data[0])

    titles.forEach((title)=>console.log(title))
}

mein();