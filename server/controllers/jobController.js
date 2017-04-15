import Job from '../models/job';

export const job = async ( ctx, next ) => {
  const data = ctx.request.body;
  const job = new Job( data );

  job.save( err => {
    if( err ) throw err;
    console.log( 'job created!' );
  });

  ctx.status = 200;
};

export const getJobs = async ( ctx, next ) => {
  ctx.body =  await Job.find( {} ).exec(); 
  ctx.status = 200;
};