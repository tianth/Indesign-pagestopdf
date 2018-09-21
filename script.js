    main();  
    function main(){  
        var p =     "";  
        var doc =   app.activeDocument;
        var pages = doc.pages;  
        var pages_group = 2; //parseInt( prompt("Quantidade de páginas agrupadas por pdf?", 2, "Grupo de páginas") ) ; 
        var num_pages_groups_rest = pages.length % pages_group; 
        var num_pages_groups = num_pages_groups_rest > 0 ? parseInt( ( pages.length/pages_group ) + num_pages_groups_rest ) :  parseInt( pages.length/pages_group ) ; 
        var is_print_output = confirm("Preparar para impressão Champs? ") ? true : false; 
        var l_page = 1;
        var prefs = app.pdfExportPreferences ; 
        for(i = 1; i <= pages.length ; i ++ ){               
            //var page = pages[i]; 
            if( !( i == 1 ) ){   
                p = ( (pages_group * i) - 1 ) + "-" + ( ((pages_group * i) - 2) + pages_group );
            }else{                 
                p = i + "-" + pages_group ;
            };
            if( !( p == "" ) && (  ( ((pages_group * i) - 2) + pages_group ) <= pages.length) ){
                var file = new File("~/Desktop/export/range-" + p + ".pdf"); 
                
                app.pdfExportPreferences.pageRange = p ;
                if( is_print_output == true ){
                    app.pdfExportPreferences.cropMarks = true; 
                    // app.pdfExportPreferences.standardsCompliance = PDFXStandards.PDFX42007_STANDARD;
                    app.pdfExportPreferences.registrationMarks = true;
                    //app.pdfExportPreferences.pdfMarkType = MarkTypes.J_MARK_WITH_CIRCLE;
                    app.pdfExportPreferences.optimizePDF = false;
                }; 
                doc.exportFile( ExportFormat.PDF_TYPE, file, false );
            };  
            l_page = i; 
        }; 
    alert("Exportadas "+ pages.length + " páginas com sucesso");
    };
#targetengine 'myPersistentScope'
 
