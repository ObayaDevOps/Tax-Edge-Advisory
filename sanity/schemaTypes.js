import landingPage from './schemas/landingPageSchema'
import rndLandingPage from './schemas/rndLandingPageSchema'
import taxCreditsPage from './schemas/taxCreditsPageSchema'
import patentBoxPage from './schemas/patentBoxPageSchema'
import capitalAllowancePage from './schemas/capitalAllowancePageSchema'
import clientTestimonialsPage from './schemas/clientTestimonialsPageSchema'
import contactUsPage from './schemas/contactUsPageSchema'
import taxCalculatorPage from './schemas/taxCalculatorPageSchema'
import featureObjectSchema from './schemas/featureObjectSchema'
import blogPage from './schemas/blogPageSchema'
import privacyPolicyPage from './schemas/privacyPolicySchema'



export const schema = {
  // types: [landingPage, rndLandingPage, taxCreditsPage, patentBoxPage, capitalAllowancePage, clientTestimonialsPage, contactUsPage, taxCalculatorPage ]
    
  types: [landingPage, taxCalculatorPage, capitalAllowancePage, rndLandingPage, taxCreditsPage, patentBoxPage, contactUsPage, featureObjectSchema, blogPage, privacyPolicyPage]

  
}
