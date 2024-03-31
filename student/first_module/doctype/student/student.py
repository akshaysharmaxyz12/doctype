# Copyright (c) 2024, akshay sharma and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class student(Document):
	pass



@frappe.whitelist()
def new_student(data):
	try:
		new_student = frappe.new_doc("student")
		new_student.first_name = data.get("first_name")
		new_student.middel_name=data.get("middel_name")
		new_student.last_name = data.get("last_name")
		new_student.e_mail = data.get("e_mail")
		new_student.gender = data.get("gender")
		new_student.date_of_birth = data.get("date_of_birth")
		new_student.nationality = data.get("nationality")
		new_student.blood_group = data.get("blood_group")
		new_student.insert()
		return new_student
	except Exception as e:
		return str(e)



@frappe.whitelist()
def update_student(data):
	try:
		if data.get("student_id"):
			student = frappe.get_doc("student", data.get("student_id"))
			if data.get("first_name"):
				student.first_name = data.get("first_name")
			if data.get("middel_name"):
				student.middel_name=data.get("middel_name")
			if data.get("last_name"):
				student.last_name = data.get("last_name")
			if data.get("gender"):
				student.gender = data.get("gender")
			if data.get("date_of_birth"):	
				student.date_of_birth = data.get("date_of_birth")
			if data.get("nationality"):	
				student.nationality = data.get("nationality")
			if data.get("blood_group"):	
				student.blood_group = data.get("blood_group")
			student.save()
			return student
	except Exception as e:
		return str(e)


@frappe.whitelist()
def delete_student(id):
	frappe.db.delete("student",id)
	return "student deleted succesful"


@frappe.whitelist()
def get_student_data(id):
	if frappe.db.exists("student",id):
		return frappe.get_doc("student",id)
	else:
		return "Please send the correct student id"

@frappe.whitelist()
def get_all_student(id):
	return frappe.db.get_list("student","*")






		


		