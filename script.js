        let img00 = document.getElementById("img00");
        let img01 = document.getElementById("img01");
        let img02 = document.getElementById("img02");
        let img03 = document.getElementById("img03");
        let img04 = document.getElementById("img04");
        let img05 = document.getElementById("img05");
        let img06 = document.getElementById("img06");
        let img07 = document.getElementById("img07");
        let fullView = document.querySelector(".fullView");
        let fullContainer = document.querySelector(".fullContainer");
        let imagemFull = document.querySelector(".imagemFull");
        let close = document.querySelector("#close");
        let gallery = document.querySelector(".gallery");

        function openFull00() {
            fullView.classList.add("_open");
            imagemFull.setAttribute("src", "./img/img00.jpg");
            document.documentElement.style.overflow = "hidden";
        }

        function openFull01() {
            fullView.classList.add("_open");
            imagemFull.setAttribute("src", "./img/img01.jpg");
            document.documentElement.style.overflow = "hidden";
        }

        function openFull02() {
            fullView.classList.add("_open");
            imagemFull.setAttribute("src", "./img/img02.jpg");
            document.documentElement.style.overflow = "hidden";
        }

        function openFull03() {
            fullView.classList.add("_open");
            imagemFull.setAttribute("src", "./img/img03.jpg");
            document.documentElement.style.overflow = "hidden";
        }

        function openFull04() {
            fullView.classList.add("_open");
            imagemFull.setAttribute("src", "./img/img04.jpg");
            document.documentElement.style.overflow = "hidden";
        }

        function openFull05() {
            fullView.classList.add("_open");
            imagemFull.setAttribute("src", "./img/img05.jpg");
            document.documentElement.style.overflow = "hidden";
        }

        function openFull06() {
            fullView.classList.add("_open");
            imagemFull.setAttribute("src", "./img/img06.jpg");
            document.documentElement.style.overflow = "hidden";
        }

        function openFull07() {
            fullView.classList.add("_open");
            imagemFull.setAttribute("src", "./img/img07.jpg");
            document.documentElement.style.overflow = "hidden";
        }

        function stopProp(event) {
            event.stopPropagation();
        }

        function closeFull() {
            fullView.classList.remove("_open");
            imagemFull.setAttribute("src", "");
            document.documentElement.style.overflow = "initial";
        }

        img00.addEventListener("click", openFull00);
        img01.addEventListener("click", openFull01);
        img02.addEventListener("click", openFull02);
        img03.addEventListener("click", openFull03);
        img04.addEventListener("click", openFull04);
        img05.addEventListener("click", openFull05);
        img06.addEventListener("click", openFull06);
        img07.addEventListener("click", openFull07);
        fullContainer.addEventListener("click", stopProp);
        fullView.addEventListener("click", closeFull);
        close.addEventListener("click", closeFull);