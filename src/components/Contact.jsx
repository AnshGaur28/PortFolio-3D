import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {useState , useRef}  from 'react';
import { EarthCanvas } from './canvas';
import SectionWrapper from '../hoc/sectionWrapper';
import { slideIn } from '../utils/motion';
import { styles } from '../style';
const service_id = import.meta.env.VITE_SERVICE_ID;
const template_id = import.meta.env.VITE_TEMPLATE_ID;
const public_key = import.meta.env.VITE_PUBLIC_KEY;
const Contact = () => {
  const  formRef = useRef();
  const [form , setForm] = useState({
    name : '',
    email : '',
    message : '',
  });

  const handleChange= (e)=>{
    const {name,  value} = e.target;
    setForm({...form , [name] : value})
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    setLoading(true);

    await emailjs.send( service_id,template_id ,
      {from_name : form.name,
        to_name : "Ansh",
        from_email : form.email,
        to_email : "ansh28.dinesh30@gmail.com",
        message : form.message,
      },public_key
      ).then(()=>{
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.")
          setForm({
            name : '',
            email : '',
            message : '',
          })
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }


      )
  }

  const [loading , setLoading] = useState(false);
  console.log(form.name);
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");