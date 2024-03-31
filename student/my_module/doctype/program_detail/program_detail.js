// Copyright (c) 2024, akshay sharma and contributors
// For license information, please see license.txt

frappe.ui.form.on("Program detail", {
	// refresh(frm) {

	// },
});


// frappe.ui.form.on('participants', {
//     preview (frm,cdt,cdn){
//         let item_data=locals[cdt][cdn]
//         if (item_data.student){
//             frappe.db.get_doc("student details",item_data.student).then(r=>{
//                 if (r.e_mail){
//                     frappe.db.get_value("User",r.e_mail,"user_image").then(result=>{
//                         if(result.message){
//                             frappe.msgprint(result.message.user_image)
                            
                            
//                         }
//                     })
//                 }
//             })
//         }
//         }
//     });



    // frappe.ui.form.on('participants', {
    //     preview(frm, cdt, cdn) {
    //         let item_data = locals[cdt][cdn];
    //         if (item_data.student) {
    //             frappe.db.get_doc("student details", item_data.student).then(r => {
    //                 if (r.e_mail) {
    //                     frappe.db.get_value("User", r.e_mail, "user_image").then(result => {
    //                         if (result.message && result.message.user_image) {

    //                             var img = new Image();

    //                             img.src = result.message.user_image;

    //                             img.alt = "User Image";
    //                             img.style.maxWidth = "100px"; // Adjust size as needed
    
    //                             var container = document.createElement("div");
    //                             container.appendChild(img);
    
    //                             var previewContainer = document.getElementById('prev');
    //                             previewContainer.innerHTML = "";

    //                             previewContainer.appendChild(container);
    //                         }
    //                     });
    //                 }
    //             });
    //         }
    //     }
    // });
    


    frappe.ui.form.on('participants', {
        preview(frm, cdt, cdn) {
            let item_data = locals[cdt][cdn];
            if (item_data.student) {
                frappe.db.get_doc("student details", item_data.student).then(r => {
                    if (r.e_mail) {
                        frappe.db.get_value("User", r.e_mail, "user_image").then(result => {
                            if (result.message && result.message.user_image) {
                                frappe.msgprint(result.message.user_image);
                                var dialog = new frappe.ui.Dialog({
                                    title: __('Image Preview'),
                                    fields: [
                                        {
                                            fieldname: 'image_preview',
                                            fieldtype: 'HTML'
                                        }
                                    ]
                                });
                                dialog.fields_dict.image_preview.$wrapper.html(
                                    `<img src="${result.message.user_image}" style="max-width: 100%; max-height: 400px;">`
                                );
                                dialog.show();
                            } else {
                                frappe.msgprint(__('No image available'));
                            }
                        });
                    }
                });
            }
        }
    });
    