require("dotenv").config();

const accountsid=AC17f1708282254d47247e6d045fb13f7f
const authToken=eada1aa9456510f9e444c1feb4c75ef7

const client=require("twilio")(accountsid,authToken);
const sendsms=async(body)=>{
    let msgoptions={
        from:"+12296296251",
        to:"+251966490817",
        body
    }
    try {
        const message=await client.messages.create(msgoptions);
        console.log(message);
    } catch (error) {
        throw error
    }
    
}
sendsms("hello this is your your username 'naolleg' ")