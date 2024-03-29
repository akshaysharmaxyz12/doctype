// Copyright (c) 2024, akshay sharma and contributors
// For license information, please see license.txt

// frappe.ui.form.on("student details", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('student details', {
    refresh: function(frm) {
        if(!frm.doc.__islocal) {
            console.log("hellow")
            frappe.contacts.render_address_and_contact(frm);
        }
        frm.set_query("Default Address", function() {
            return {
                "filters": {
                    "link_doctype": "Address"
                }
            };
        });
    },
    before_save: function(frm) {
        // Check if middle name is defined before concatenating
        let fullName = frm.doc.first_name + ' ' + (frm.doc.middle_name || '') + ' ' + frm.doc.last_name;
        frm.doc.full_name = fullName.trim(); // Trim extra spaces
    },

    on_submit: function(frm) {
        
        frm.add_custom_button(__('Create User'), function() {
            frappe.call({
                method: 'student.my_module.doctype.student_details.student_details.create_user_from_student',
                args: {
                    name: frm.doc.name
                },
                callback: function(response) {
                    if (response.message) {
                        frappe.msgprint(response.message);
                    } else {
                        frappe.msgprint('Failed to create user.');
                    }
                }
            });
        });
    },
    primary_address: function(frm){
        console,log("hellow")
		if(frm.doc.primary_address){
            console.log("akshay")
			frappe.call({
				method: 'frappe.contacts.doctype.address.address.get_address_display',
				args: {
					"address_dict": frm.doc.primary_address
				},
				callback: function(r) {
					frm.set_value("address_html", r.message);
				}
			});
		}
		if(!frm.doc.primary_address){
			frm.set_value("address_html", "");
		}
	},
});










