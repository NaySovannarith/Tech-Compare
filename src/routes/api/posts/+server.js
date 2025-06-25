export const GET = ({request}) =>{
    const authHeader = request.headers.get('Authorization')
    console.log(authHeader)

    return new Response(JSON.stringify({message:"Hello World"}),{status:200});

}
export const POST = async ({request}) => {
    const body = await request.json()
    console.log(body)
    return new Response(JSON.stringify({message:"Greatae"}),{status:201 });
}