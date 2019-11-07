import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import { TextField } from '../../components/form/fields/TextField'
import Button from '../../components/Button'
import { TextAreaField } from '../../components/form/fields/TextAreaField'
import { CheckListField } from '../../components/form/fields/CheckListField'

const schema = yup.object({
	fullName: yup
		.string()
		.required()
		.min(5),
	email: yup
		.string()
		.required()
		.email(),
	phone: yup
		.string()
		.matches(
			/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
			'Phone number is not valid'
		)
		.required(),
	message: yup
		.string()
		.required()
		.min(50)
})

const checkList = [
	{
		select: '',
		unit: '1F',
		beds: 1,
		bath: 1,
		sqft: 592,
		price: '$3020',
		availability: 'now'
	},
	{
		select: '',
		unit: '2A',
		beds: 1,
		bath: 1,
		sqft: 604,
		price: '$3030',
		availability: 'now'
	},
	{
		select: '',
		unit: '2B',
		beds: 1,
		bath: 1,
		sqft: 623,
		price: '$3060',
		availability: 'Oct 14'
	}
]

const ContactForm = () => {
	return (
		<Formik
			validateOnBlur={true}
			validateOnChange={true}
			validationSchema={schema}
			initialValues={{ fullName: '', email: '', phone: '', message: '' }}
			onSubmit={() => {}}
		>
			{() => {
				return (
					<Form>
						<div>
							<Field
								name="fullName"
								label="Your Name"
								placeholder="Enter name here"
								required
								component={TextField}
							/>
						</div>
						<div>
							<Field
								name="email"
								label="Your Email"
								placeholder="Enter email here"
								required
								component={TextField}
							/>
						</div>
						<div>
							<Field
								name="phone"
								label="Your Phone"
								placeholder="Enter phone nr here"
								required
								component={TextField}
							/>
						</div>
						<div>
							<Field
								name="message"
								label="Message"
								placeholder="Enter a message here"
								required
								component={TextAreaField}
							/>
						</div>
						<div>
							<Field
								name="unit"
								label="Please Select Unit"
								component={CheckListField}
								checkList={checkList}
							/>
						</div>
						<div>
							<Button primary style={{ width: '100%' }}>
								Send
							</Button>
						</div>
					</Form>
				)
			}}
		</Formik>
	)
}

export default React.memo(ContactForm)
