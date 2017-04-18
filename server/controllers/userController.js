import User from '../models/user';

export const getUser = async ( ctx, next ) => {
  const { email, name, picture, nickname, identities } = ctx.request.body;
  const user = {
    name: name,
    email: email,
    picture: picture,
    nickname: nickname,
    userId: identities[0].user_id
  };

  try{
    let gotUser = await User.findOne( { email: email } );
    
    if( !gotUser ){
      const newUser = new User( user );   
      ctx.body = await newUser.save();
      ctx.status = 200;
    }else{
      ctx.body = gotUser;
      ctx.status = 200;
    }
  }catch( err ){
    err => ctx.status = 500;
  }
};
