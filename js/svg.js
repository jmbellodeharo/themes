/* ------------------------------------------------------
   CREATE SVG FOR TXT ICON
------------------------------------------------------ */
function createSVGTXT(width = 48, height = 48) {
    const ns = "http://www.w3.org/2000/svg";

    // Create main SVG
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("viewBox", "0 0 64 64");

    // Create group <g>
    const g = document.createElementNS(ns, "g");
    g.setAttribute("id", "file-txt");

    // File outline
    const pathContorno = document.createElementNS(ns, "path");
    pathContorno.setAttribute("d", "M8 4 H48 L56 12 V65 H8 Z");
    pathContorno.setAttribute("fill", "#ffffff");
    pathContorno.setAttribute("stroke", "#333333");
    pathContorno.setAttribute("stroke-width", "2");
    g.appendChild(pathContorno);

    // Bent tab
    const pathPestana = document.createElementNS(ns, "path");
    pathPestana.setAttribute("d", "M48 4 L56 12 H48 Z");
    pathPestana.setAttribute("fill", "#4e9af1");
    g.appendChild(pathPestana);

    // Simulated text lines
    const lineas = [20, 28, 36];
    lineas.forEach(y => {
    const rect = document.createElementNS(ns, "rect");
    rect.setAttribute("x", "12");
    rect.setAttribute("y", y);
    rect.setAttribute("width", "36");
    rect.setAttribute("height", "4");
    rect.setAttribute("fill", "#4e9af1");
    rect.setAttribute("rx", "1");
    g.appendChild(rect);
    });

    // Text "TXT"
    const text = document.createElementNS(ns, "text");
    text.setAttribute("x", "32");
    text.setAttribute("y", "52");
    text.setAttribute("font-size", "8");
    text.setAttribute("font-family", "Ubuntu, sans-serif");
    text.setAttribute("fill", "#333333");
    text.setAttribute("text-anchor", "middle");
    text.textContent = "TXT";
    g.appendChild(text);

    svg.appendChild(g);
    return svg;
}

/* ------------------------------------------------------
   CREATE SVG FOR SAVE ICON
------------------------------------------------------ */
function createSVGSave(width = 48, height = 48) {
    const ns = "http://www.w3.org/2000/svg";

    // Crear SVG principal
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("viewBox", "0 0 64 64");

    // Crear grupo <g>
    const g = document.createElementNS(ns, "g");
    g.setAttribute("id", "icon-save");

    // Contorno del disquete
    const pathContorno = document.createElementNS(ns, "path");
    pathContorno.setAttribute("d", "M12 4 H52 L52 60 H12 Z");
    pathContorno.setAttribute("fill", "#ffffff");
    pathContorno.setAttribute("stroke", "#333333");
    pathContorno.setAttribute("stroke-width", "2");
    g.appendChild(pathContorno);

    // Pestaña superior (zona de metal del disquete)
    const pathPestana = document.createElementNS(ns, "rect");
    pathPestana.setAttribute("x", "12");
    pathPestana.setAttribute("y", "4");
    pathPestana.setAttribute("width", "40");
    pathPestana.setAttribute("height", "12");
    pathPestana.setAttribute("fill", "#4e9af1");
    g.appendChild(pathPestana);

    // Ventana central del disquete
    const rectVentana = document.createElementNS(ns, "rect");
    rectVentana.setAttribute("x", "20");
    rectVentana.setAttribute("y", "20");
    rectVentana.setAttribute("width", "24");
    rectVentana.setAttribute("height", "16");
    rectVentana.setAttribute("fill", "#4e9af1");
    rectVentana.setAttribute("rx", "2");
    g.appendChild(rectVentana);

    // Icono de “SAVE” abajo
    const text = document.createElementNS(ns, "text");
    text.setAttribute("x", "32");
    text.setAttribute("y", "56");
    text.setAttribute("font-size", "8");
    text.setAttribute("font-family", "Ubuntu, sans-serif");
    text.setAttribute("fill", "#333333");
    text.setAttribute("text-anchor", "middle");
    text.textContent = "SAVE";
    g.appendChild(text);

    svg.appendChild(g);
    return svg;
}

