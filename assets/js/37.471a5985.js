(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{307:function(e,t,a){"use strict";a.r(t);var s=a(13),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cloud-shell/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Overview of Azure Cloud Shell"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"mount-a-drive-and-upload-files-to-cloud-shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mount-a-drive-and-upload-files-to-cloud-shell"}},[e._v("#")]),e._v(" Mount a drive and upload files to Cloud Shell")]),e._v(" "),a("h4",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("When working with "),a("a",{attrs:{href:"http://shell.azure.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cloud Shell"),a("OutboundLink")],1),e._v(", you sometimes need the ability to upload files to work with later. I'm going to call out the two methods that I use to accomplish this task all the time.")]),e._v(" "),a("h4",{attrs:{id:"mount-a-drive-and-upload-via-the-azure-portal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mount-a-drive-and-upload-via-the-azure-portal"}},[e._v("#")]),e._v(" Mount a drive and upload via the Azure Portal")]),e._v(" "),a("p",[e._v("In method one, we'll update the file share that's associated with Cloud Shell by using the "),a("code",[e._v("clouddrive mount")]),e._v(" command. Note: that you may already have a cloud drive that is created upon initial start of cloud shell. Go ahead and spin up Azure Cloud Shell and type "),a("code",[e._v("clouddrive -h")]),e._v(" to see the commands to mount and unmount a drive.")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("michael@Azure:~$ clouddrive -h\n\nGroup\n  clouddrive                  :Manage storage settings "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" Azure Cloud Shell.\n\nCommands\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mount")]),e._v("                       :Mount a "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" share to Cloud Shell.\n  unmount                     :Unmount a "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" share from Cloud Shell.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("To mount a drive, we'll type "),a("code",[e._v("clouddrive mount -h")]),e._v(" to see a help screen that is looking for the following parameters:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("Arguments\n  -s "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" --subscription "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v("          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Required"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(":Subscription ID or name.\n  -g "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" --resource-group group     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Required"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(":Resource group name.\n  -n "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" --storage-account name     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Required"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(":Storage account name.\n  -f "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" --file-share name          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Required"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(":File share name.\n  -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" --disk-size size                     :Disk size "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" GB. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("default "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  -F "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" --force                              :Skip warning prompts.\n  -? "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" -h "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" --help                          :Shows this usage text.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("We'll now simply call "),a("code",[e._v("clouddrive mount -s subscription-id -g your-resource-group-name -n storage-account -f storage-file-name")]),e._v(" to create our drive. Once it has completed, we'll navigate to the resource and hit the "),a("strong",[e._v("Upload")]),e._v(" button and upload a file. Again, you could have navigated to your existing resource group instead of creating a new one - but I want you to learn how to do this manually.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/cloudshellnew1.png")}}),e._v(" "),a("p",[e._v("Now type "),a("code",[e._v("cd clouddrive")]),e._v(" and "),a("code",[e._v("ls -l")]),e._v(" and you should see the file you just uploaded:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("michael@Azure:~/clouddrive$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -l\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("53")]),e._v("\n-rwxrwxrwx "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("53385")]),e._v(" May "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("29")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v(":55 cloudshellnew1.png\nmichael@Azure:~/clouddrive$\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h4",{attrs:{id:"upload-via-cloud-shell-button"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-via-cloud-shell-button"}},[e._v("#")]),e._v(" Upload via Cloud Shell button")]),e._v(" "),a("p",[e._v("The second method involves pressing the "),a("strong",[e._v("Upload")]),e._v(" button built right into Azure Cloud Shell.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/cloudshellnew2.png")}}),e._v(" "),a("p",[e._v("After you press this button and provide the file, you'll see that it is uploading it into your "),a("code",[e._v("/HOME/username")]),e._v(" folder")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/cloudshellnew3.png")}}),e._v(" "),a("p",[e._v("Now you can simply type "),a("code",[e._v("cp filename cloudrive")]),e._v(" to copy the file and have access to the file via cloud drive.")])])}),[],!1,null,null,null);t.default=n.exports}}]);