import Job from '../models/job';
import User from '../models/user';

export const postJob = async ( ctx, next ) => {
  try{
    const data = ctx.request.body;
    const job = new Job( data.job );
    let currentUser = await User.findOne( { userId: data.userId } );
    
    if( currentUser ){
      let savedJob = job.save();
      currentUser.jobs.push( await savedJob );
      currentUser.save();
    }
    ctx.body = 'Job has been Posted!';
    ctx.status = 200;
    
  }catch( err ){
    err => ctx.status = 500;
  }
};

export const getJobs = async ( ctx, next ) => {
  try{
    ctx.body =  await Job.find( {} ).exec(); 
    ctx.status = 200;
  }catch( err ){
    err => ctx.status = 500;
  }
};
