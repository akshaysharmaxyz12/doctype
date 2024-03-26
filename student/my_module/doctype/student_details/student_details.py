# Copyright (c) 2024, akshay sharma and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class studentdetails(Document):
	pass




@frappe.whitelist()
def create_user_from_student(name):
    student = frappe.get_doc("student details",name)
    user = frappe.new_doc("User")
    user.first_name = student.first_name
    user.last_name = student.last_name
    user.email = student.e_mail
    user.insert()
    frappe.msgprint("User created successfully.")