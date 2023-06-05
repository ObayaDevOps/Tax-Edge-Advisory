import { Container, AspectRatio } from '@chakra-ui/layout'

export default function MapContainer() {
    return (
        <AspectRatio ratio={16 / 9}>
        <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.059023929487!2d32.6040834!3d0.2968927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd7709de8847%3A0xa008783e1e689854!2sAfropocene%20Studio%20Lab!5e0!3m2!1sen!2sug!4v1685965056318!5m2!1sen!2sug'
        // src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13419.914572103351!2d32.60218866846019!3d0.29767600295599794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xadb6277c96791e9d!2sTools%20and%20Machinery!5e0!3m2!1sen!2sug!4v1635764860880!5m2!1sen!2sug'
        // src='https://goo.gl/maps/cdaa3E35MHf76GSU8'
        alt='demo'
        />
        </AspectRatio>
    )
}
