import User from '../models/user';

export const getUser = async ( ctx, next ) => {
  const { email, name, picture, nickname, identities, userId } = ctx.request.body;
  const user = {
    name: name,
    email: email,
    picture: picture,
    nickname: nickname,
    userId: userId || identities[0].user_id
  };

  try{
    let gotUser = await User.findOne( { userId: user.userId } );
    
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
