
    main();  
    function main(){  
        var p =     "";  
        var doc =   app.activeDocument;
        var pages = doc.pages;  
        var pages_group = 2; //parseInt( prompt("Quantidade de páginas agrupadas por pdf?", 2, "Grupo de páginas") ) ; 
        var num_pages_groups_rest = pages.length % pages_group; 
        var num_pages_groups = num_pages_groups_rest > 0 ? parseInt( ( pages.length/pages_group ) + num_pages_groups_rest ) :  parseInt( pages.length/pages_group ) ; 
        var is_print_output = true; 
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
                var page_name = pages.item( i ).name; 
                var file = new File("~/Desktop/export/" + p + ".pdf"); 
                
                prefs.pageRange = p ;
                
                if( is_print_output == true ){
                    with( app.pdfExportPreferences ) {
                        cropMarks = true;
                        //bleedMarks = (prompt("Marcas de sangria", bleedMarks) === 'true') ;
                        //bleedInside = prompt("Sangria interna (número)", bleedInside );*
                        useDocumentBleedWithPDF = true;
                        //standardsCompliance = PDFXStandards.PDFX42007_STANDARD;
                        registrationMarks = false;
                        //pdfMarkType = MarkTypes.J_MARK_WITH_CIRCLE;
                        optimizePDF = false;
                        viewPDF = false;
                    };
                }; 
                doc.exportFile( ExportFormat.PDF_TYPE, file, false );
            };  
            l_page = i; 
        }; 
    alert("Exportadas "+ pages.length + " páginas com sucesso");
    //confirm("Gostaria de ver o último arquivo exportado?") && app.pdfExportPreferences.viewPDF = true;
    };
#targetengine 'myPersistentScope'
