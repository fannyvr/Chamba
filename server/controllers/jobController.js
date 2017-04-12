import Job from '../models/job';
import parse from 'co-body';

export const job = async ( ctx, next ) => {
  const data = await parse( ctx );
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