import sanityClient from '@sanity/client'
import { createClient} from '@sanity/client'

 const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "v2023-11-04",
    useCdn: false
    })
  
export default client;