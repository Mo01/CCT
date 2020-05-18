$(function () {
    // PTZ Drivers array
    let PtzDrivers = [`AD Pelco P`, `AD ASCII Continuous `, `AD ASCII Make/Break`, `Philips Biphase`, `Canon VC-C4`, `Ultrak KD6 (Diamond)`, `Kalatel`, `Panasonic WV-CS850 Conv`, `Panasonic WV-CS850 New`, `Pelco ASCII`, `Pelco D`, `Pelco P`,
      `RVision`, `SAE`, `Sensormatic`, `Sony`, `VCL`, `Vicon`, `Vicon Extended`, `ACTi Pelco-P IP`, `ACTi HTTP IP`, `ACTi Pelco-D IP`, `AD Illustra IP`, `AD IP`, `Axis V2 IP`, `Axis V2 IP (Firmware 4.40)`, `Bosch BiCom IP`, `Bosch OSRD IP`, `Bosch Pelco-D IP`,
      `Brickcom IP`, `Canon IP`, `Cisco IP (v.1.0)`, `Digital`, `Generic-D IP`, `Hikvision Speed Dome IP`, `Mobotix IP`, `Panasonic IP`, `Pelco IP`, `Pelco API`, `Samsung IP`, `Sentry360 IP`, `Sony IP-Continuous Move`, `Sony IP-Move`, `Sony VISCA IP`, `Speco IP`, `Symmetry ENVS IP`,
      `Symmetry IP`, `Toshiba IK-WB21A IP`, `Toshiba IK-WB IP`, `Vivotek IP`, `Nexus(DLTV) IP`, `Nexus(IR) IP`, `FLIR IP`, `Dahua IP`, `Samsung`, `VMS Remote PTZ`, `Samsung IP (v2)`];
    //  Dewarping drivers
    let lensType = [`Acti`, `Axis`, `Bosch`, `HikVision`, `ImmerVision`, `Oncam`, `Samsung`, `Sentry 360`, `Standard`, `Vivotek`];
    let lensProfile = [`A0`, `A1`, `A8`, `B0`, `B4`, `B5`, `B6`, `B7`, `B8`, `B9`, `C1`, `C3`, `C4`, `C7`, `C8`, `C9`];

    // Device type
    let deviceType = ["180° IP Camera", "270° IP Camera", "360° IP Camera", "Analog", "Audio Bridge", "Body camera", "Bullet", "Control Board", "Cube", "Dome", "Doorstation / Intercom", "DVR", "Encoder", "Fisheye", "Fixed IP Camera", "Flex lens camera", "Hybrid Camera Receiver", "Intercom", "IP Horn Speaker", "Multiple sensors", "NVR", "Panoramic IP Camera", "PTZ IP Camera", "Radar", "Spy Camera", "Thermal Bullet Camera", "Thermal PTZ", "Turrent IP Camera", "Zoom IP Camera"]


    $(".plusDriver").on("click", function (e) {
      e.preventDefault();
      $(".btnRemove").hide();
      $(".addDriver").append(`<div class="row" id="con-${i}"><div class="col-2"><label ></div><div class="col-4"><input type="text" class="form-control  drive-${i + 1}" placeholder="Driver"></div><div class="col-2"><button type="button" class="btn btn-light btnRemove" id="btnRemove${i}">X</button></div></div>`);
      $("#list1").append(`<li><a href="#" id=${i + 1}>${i + 1}</a></li>`)
      i++;

    });

    // deleting driver extra txet box
    $('body').on('click', '.btnRemove', function () {
      $(this).parent().parent().remove();
      $(`#btnRemove${i - 2}`).show();
      $(`#${i}`).remove();
      i--;

    });

    // Detect the chane  // input ==>>//
    $("#myTextBox").bind("change paste keyup select  propertychange", function () {
      alert($(this).val().trim());
    });

    //Compressions : H264
    $(".h264Check").click(function () {
      if ($(this).is(":checked")) {
        $(".h264Check").val("Yes")
        $(".urlH264Check").prop('required', true);
      } else {
        $(".h264Check").val("No")
      }
    });
    $(".tcpH264").click(function () {
      if ($(this).is(":checked")) {
        $(".tcpH264").val("Yes")
      } else {
        $(".tcpH264").val("No")
      }
    });
    $(".udpH264").click(function () {
      if ($(this).is(":checked")) {
        $(".udpH264").val("Yes")
      } else {
        $(".udpH264").val("No")
      }
    });
    $(".audioH264").click(function () {
      if ($(this).is(":checked")) {
        $(".audioH264").val("Yes")
      } else {
        $(".audioH264").val("")
      }
    });
    $(".gH264").click(function () {
      if ($(this).is(":checked")) {
        $(".gH264").val("RTSP:   ")
      } else {
        $(".gH264").val("")
      }
    });
    $(".urlH264Check").click(function () {
      if ($(this).is(":checked")) {
        $(".urlH264Check").val()
      } else {
        $(".urlH264Check").val("")
      }
    });

    //Compression : H265
    $(".h265Check").click(function () {
      if ($(this).is(":checked")) {
        $(".h265Check").val("Yes")
        $(".urlH265Check").prop('required', true);
      } else {
        $(".h265Check").val("No")
      }
    });
    $(".tcpH265").click(function () {
      if ($(this).is(":checked")) {
        $(".tcpH265").val("Yes")
      } else {
        $(".tcpH264").val("No")
      }
    });
    $(".udpH265").click(function () {
      if ($(this).is(":checked")) {
        $(".udpH265").val("Yes")
      } else {
        $(".udpH265").val("No")
      }
    });
    $(".audioH265").click(function () {
      if ($(this).is(":checked")) {
        $(".audioH265").val("Yes")
      } else {
        $(".audioH265").val("")
      }
    });
    $(".gH265").click(function () {
      if ($(this).is(":checked")) {
        $(".gH265").val("RTSP:   ")
      } else {
        $(".gH265").val("")
      }
    });
    $(".urlH264Check").click(function () {
      if ($(this).is(":checked")) {
        $(".urlH265Check").val()
      } else {
        $(".urlH265Check").val("")
      }
    });

    //Compression : MJPEG
    $(".mjpegCheck").click(function () {
      if ($(this).is(":checked")) {
        $(".mjpegCheck").val("Yes")
        $(".urlMJPEGCheck").prop('required', true);
      } else {
        $(".mjpegCheck").val("No")
      }
    });
    $(".tcpMJPEG").click(function () {
      if ($(this).is(":checked")) {
        $(".tcpMJPEG").val("Yes")
      } else {
        $(".tcpMJPEG").val("No")
      }
    });
    $(".udpMJPEG").click(function () {
      if ($(this).is(":checked")) {
        $(".udpMJPEG").val("Yes")
      } else {
        $(".udpMJPEG").val("No")
      }
    });
    $(".audioMJPEG").click(function () {
      if ($(this).is(":checked")) {
        $(".audioMJPEG").val("Yes")
      } else {
        $(".audioMJPEG").val("")
      }
    });
    $(".gMJPEG").click(function () {
      if ($(this).is(":checked")) {
        $(".gMJPEG").val("RTSP:   ")
      } else {
        $(".gMJPEG").val("")
      }
    });
    $(".urlMJPEGCheck").click(function () {
      if ($(this).is(":checked")) {
        $(".urlMJPEGCheck").val()
      } else {
        $(".urlMJPEGCheck").val("")
      }
    });

    //Compression : MPEG4
    $(".mpeg4Check").click(function () {
      if ($(this).is(":checked")) {
        $(".mpeg4Check").val("Yes")
        $(".urlMPEG4Check").prop('required', true);
      } else {
        $(".mpeg4Check").val("No")
      }
    });
    $(".tcpMPEG4").click(function () {
      if ($(this).is(":checked")) {
        $(".tcpMPEG4").val("Yes")
      } else {
        $(".tcpMPEG4").val("No")
      }
    });
    $(".udpMPEG4").click(function () {
      if ($(this).is(":checked")) {
        $(".udpMPEG4").val("Yes")
      } else {
        $(".udpMPEG4").val("No")
      }
    });
    $(".audioMPEG4").click(function () {
      if ($(this).is(":checked")) {
        $(".audioMPEG4").val("Yes")
      } else {
        $(".audioMPEG4").val("")
      }
    });
    $(".gMPEG4").click(function () {
      if ($(this).is(":checked")) {
        $(".gMPEG4").val("RTSP:   ")
      } else {
        $(".gMPEG4").val("")
      }
    });
    $(".urlMPEG4Check").click(function () {
      if ($(this).is(":checked")) {
        $(".urlMPEG4Check").val()
      } else {
        $(".urlMPEG4Check").val("")
      }
    });

    // FW Version 
    $(".updated").click(function () {
      if ($(this).is(":checked")) {
        $(".updated").val("Updated")
      } else {
        $(".updated").val("")
      }
    });

    //Display PTZ
    $("#ptzCV").click(function () {
      if ($(this).is(":checked")) {
        $("#ptzs").val("CV supports PTZ")
        $(".PTZ").css("display", "inline-block");
      }
    });
    $("#ptzC").click(function () {
      if ($(this).is(":checked")) {
        $("#ptzs").val("Camera supports PTZ")
        $(".PTZ").css("display", "none");
      }
    });
    $("#ptzCD").click(function () {
      if ($(this).is(":checked")) {
        $("#ptzs").val("Camera doesn't support PTZ")
        $(".PTZ").css("display", "none");
      }
    });


    //PTZ driver list
    PtzDrivers.forEach((dType) => {
      $(".ptzList").append(`<option value="${dType}">${dType}</option>`)
    });

    // PTZ supported
    $('input[name=panTilt]').click(function () {
      if (this.value == 'Pass') {
        $('#panTilts').val('Pass')
      } else if (this.value == 'Failed') {
        $('#panTilts').val('Failed')
      } else if (this.value == 'Not supported') {
        $('#panTilts').val('Not supported')
      }

    });

    $('input[name=zoom]').click(function () {
      if (this.value == 'Pass') {
        $('#zooms').val('Pass')
      } else if (this.value == 'Failed') {
        $('#zooms').val('Failed')
      } else if (this.value == 'Not supported') {
        $('#zooms').val('Not supported')
      }

    });

    $('input[name=iris]').click(function () {
      if (this.value == 'Pass') {
        $('#iriss').val('Pass')
      } else if (this.value == 'Failed') {
        $('#iriss').val('Failed')
      } else if (this.value == 'Not supported') {
        $('#iriss').val('Not supported')
      }
      
    });

    $('input[name=focus]').click(function () {
      if (this.value == 'Pass') {
        $('#focuss').val('Pass')
      } else if (this.value == 'Failed') {
        $('#focuss').val('Failed')
      } else if (this.value == 'Not supported') {
        $('#focuss').val('Not supported')
      }
    })

    $('input[name=aIRIS]').click(function () {
      if (this.value == 'Pass') {
        $('#aIRISs').val('Pass')
      } else if (this.value == 'Failed') {
        $('#aIRISs').val('Failed')
      } else if (this.value == 'Not supported') {
        $('#aIRISs').val('Not supported')
      }
    })

    $('input[name=aFocus]').click(function () {
      if (this.value == 'Pass') {
        $('#aFocuss').val('Pass')
      } else if (this.value == 'Failed') {
        $('#aFocuss').val('Failed')
      } else if (this.value == 'Not supported') {
        $('#aFocuss').val('Not supported')
      }

    })

    $('input[name=ptzSpped]').click(function () {
      if (this.value == 'Pass') {
        $('#ptzSppeds').val('Pass')
      } else if (this.value == 'Failed') {
        $('#ptzSppeds').val('Failed')
      } else if (this.value == 'Not supported') {
        $('#ptzSppeds').val('Not supported')
      }
      console.log($('#ptzSppeds').val());
    })

    $('input[name=presetSet]').click(function () {     
      if (this.value == 'Pass') {
        $('#presetSets').val('Pass')
      } else if (this.value == 'Failed') {
        $('#presetSets').val('Failed')
      } else if (this.value == 'Not supported') {
        $('#presetSets').val('Not supported')
      }
      console.log($('#presetSets').val());
    })

    $('input[name=presetShow]').click(function () {      
      if (this.value == 'Pass') {
        $('#presetShows').val('Pass')
      } else if (this.value == 'Failed') {
        $('#presetShows').val('Failed')
      } else if (this.value == 'Not supported') {
        $('#presetShows').val('Not supported')
      }
      console.log($('#presetShows').val());
    })

    //Device type list
    deviceType.forEach((ptzD) => {
      $(".deviceType").append(`<option value="${ptzD}">${ptzD}</option>`)


    });

    // Dewarping driver list
    lensType.forEach((lensT) => {
      $(".dewarpingT").append(`<option value="${lensT}">${lensT}</option>`)
    });
    lensProfile.forEach((lensT) => {
      $(".dewarpingP").append(`<option value="${lensT}">${lensT}</option>`)
    });
    //Dewarping
    $("#dewarpingCVP").on("click", () => {
      $(".dew").css("display", "inline-block");
      $("#dewarpings").val("CV supports dewarping ")

    });
    $("#dewarpingCVF").on("click", () => {
      $(".dew").css("display", "none");
      $("#dewarpings").val("CV doesn't support dewarping");
    });
    $("#dewarpingCNS").on("click", () => {
      $(".dew").css("display", "none");
      $("#dewarpings").val("Camera doesn't support dewarping");
    });

    //Events
    $("#eventCVP").on("click", () => {
      $("#events").val("CV supports dewarping ")
    });
    $("#eventCVF").on("click", () => {
      $("#events").val("CV doesn't support dewarping")
    });
    $("#eventCNS").on("click", () => {
      $("#events").val("Camera doesn't support dewarping")
    });

    // Test Level
    $("#testL1").on("click", () => {
      $("#testLs").val("Level 1")
    });
    $("#testL2").on("click", () => {
      $("#testLs").val("Level 2")
    });

    // added focus function
    $('.mac1').on('input', function (event) {
      let mac = event.currentTarget.value;
      if (mac.length === 2) {
        $(".mac2").focus()
      }
    });
    $('.mac2').on('input', function (event) {
      let mac = event.currentTarget.value;
      if (mac.length === 2) {
        $(".mac3").focus()
      }
    });
    $('.mac3').on('input', function (event) {
      let mac = event.currentTarget.value;
      if (mac.length === 2) {
        $(".mac4").focus()
      }
    });
    $('.mac4').on('input', function (event) {
      let mac = event.currentTarget.value;
      if (mac.length === 2) {
        $(".mac5").focus()
      }
    });

    $('.ip1').on('input', function (event) {
      let ip = event.currentTarget.value;
      if (ip.length === 3) {
        $(".ip2").focus()
      }
    });
    $('.ip2').on('input', function (event) {
      let ip = event.currentTarget.value;
      if (ip.length === 3) {
        $(".ip3").focus()
      }
    });
    $('.ip3').on('input', function (event) {
      let ip = event.currentTarget.value;
      if (ip.length === 3) {
        $(".ip4").focus()
      }
    });
    $('.chCount').on('input', function (event) {
      let count = event.currentTarget.value;
      if (count.length === 2) {
        $(".streamId").focus()
      }
    });


    // Text box read only

      $("#checkType").click(function () {
        if ($(this).is(":checked")) {
          $(".newTypeCheck").removeAttr("disabled");
          $(".newTypeCheck").focus();
          $(".deviceTypeCheck").attr("disabled", "disabled");
          $(".deviceTypeCheck").val("")
        } else {
          $(".newTypeCheck").attr("disabled", "disabled");
          $(".deviceTypeCheck").removeAttr("disabled");
          $(".deviceTypeCheck").focus();
        }
      });

      $(".h264Check").click(function () {
        if ($(this).is(":checked")) {
          $(".urlH264Check").removeAttr("disabled");
          $(".urlH264Check").focus();
        } else {
          $(".urlH264Check").attr("disabled", "disabled");

        }
      });

      $(".h265Check").click(function () {
        if ($(this).is(":checked")) {
          $(".urlH265Check").removeAttr("disabled");
          $(".urlH265Check").focus();
          $(".h265Check").val("Yes");

          console.log(" val", $(".h265Check").val())
        } else {
          $(".urlH265Check").attr("disabled", "disabled");
          $(".h265Check").val("No");
          console.log(" val", $(".h265Check").val())
        }
      });

      $(".mjpegCheck").click(function () {
        if ($(this).is(":checked")) {
          $(".urlMJPEGCheck").removeAttr("disabled");
          $(".urlMJPEGCheck").focus();
        } else {
          $(".urlMJPEGCheck").attr("disabled", "disabled");

        }
      });

      $(".mpeg4Check").click(function () {
        if ($(this).is(":checked")) {
          $(".urlMPEG4Check").removeAttr("disabled");
          $(".urlMPEG4Check").focus();
        } else {
          $(".urlMPEG4Check").attr("disabled", "disabled");

        }
      });
      $(".vWer").val("Windows  " + window.navigator.appVersion.split("NT")[1].split(";")[0].trim())
      console.log($(".vWer").val())


      // PDF
      $(".submitB").on("click", () => {
        let testerName = $(".testerName").val();
        let cvVersion = $(".cvVersion").val();
        let placeholder = $(".placeholder").val();
        let manfu = $(".manfu").val();
        let model = $(".model").val();
        let ip1 = $(".ip1").val();
        let ip2 = $(".ip2").val();
        let ip3 = $(".ip3").val();
        let ip4 = $(".ip4").val();
        let mac1 = $(".mac1").val();
        let mac2 = $(".mac2").val();
        let mac3 = $(".mac3").val();
        let mac4 = $(".mac4").val();
        let mac5 = $(".mac5").val();
        let chCount = $(".chCount ").val();
        let streamId = $(".streamId ").val();
        let uName = $(".uName ").val();
        let pWord = $(".streamId ").val();
        let fwVersion = $(".fwVersion ").val();
        let ptzs = $("#ptzs ").val();
        let dewarpings = $("#dewarpings").val();
        let events = $("#events").val();
        let testLs = $("#testLs").val();

        let m = new Date();
        let dateString = ("0" + (m.getUTCMonth() + 1)).slice(-2) + "/" + ("0" + m.getUTCDate()).slice(-2) + "/" + m.getUTCFullYear();


        if (testerName !== "" && cvVersion !== "" && placeholder !== "" && manfu !== "" && model !== "" && ip1 !== "" && ip2 !== "" && ip3 !== "" && ip4 !== "" && mac1 !== "" && mac2 !== "" && mac3 !== "" && mac4 !== "" && mac5 !== "" && chCount !== "" && streamId !== "" && uName !== "" && pWord !== "" && fwVersion !== "" && ptzs !== "" && dewarpings !== "" && events !== "" && testLs !== "") {

          var doc = new jsPDF({
            orientation: 'portrait',
          });
          doc.rect(5, 5, 200, 290);
          doc.text(170, 10, `${dateString}`);
          doc.ellipse(100, 25, 50, 13, 'S');


          doc.setTextColor(231, 77, 61);
          doc.text(80, 20, 'Salient Systems');


          doc.setTextColor(100);
          doc.text(65, 30, 'Camera Certification Template');

          doc.setTextColor(100);
          doc.text(10, 50, "Tester:  " + `${$(".testerName").val().trim()}`);
          doc.text(10, 60, "CV Version:  " + `${$(".cvVersion").val().trim()}`);
          doc.text(10, 70, "Windows Version:  " + `${$(".vWer").val().trim()}`);
          doc.text(10, 80, "Manfacturer:  " + `${$(".manfu").val().trim()}` + "                    " + "   " + "Model  :" + `${$(".model").val().trim()}`);
          doc.text(10, 90, "Camera's IP:  " + `${$(".ip1").val().trim()}` + "." + `${$(".ip2").val().trim()}` + "." + `${$(".ip3").val().trim()}` + "." + `${$(".ip4").val().trim()}` + "      " + "Mac Address:  " + `${$(".mac1").val().trim()}` + ":" + `${$(".mac2").val().trim()}` + ":" + `${$(".mac3").val().trim()}` + ":" + `${$(".mac4").val().trim()}` + ":" + `${$(".mac5").val().trim()}`);
          doc.text(10, 100, "Device Type:  " + (`${$(".deviceTypeCheck").val().trim()}` || `${$(".newTypeCheck").val().trim()}`));
          doc.text(10, 110, "Compressions:  ");
          doc.text(30, 120, "H264:  " + `${$(".h264Check").val().trim()}` + "     TCP:  " + `${$(".tcpH264").val().trim()}` + "  UDP:  " + `${$(".udpH264").val().trim()}` + "  Audio:  " + `${$(".audioH264").val().trim()}`);
          doc.text(30, 130,  "Driver:  " + `${$(".gH264").val().trim()}` + `${$(".urlH264Check").val().trim()}`);
          doc.text(30, 140, "H265:  " + `${$(".h265Check").val().trim()}` + "     TCP:  " + `${$(".tcpH265").val().trim()}` + "  UDP:  " + `${$(".udpH265").val().trim()}` + "  Audio:  " + `${$(".audioH265").val().trim()}`);
          doc.text(30, 150,  "Driver:  " + `${$(".gH265").val().trim()}` + `${$(".urlH265Check").val().trim()}`);
          doc.text(30, 160, "MJPEG:  " + `${$(".mjpegCheck").val().trim()}` + "  TCP:  " + `${$(".tcpMJPEG").val().trim()}` + "  UDP:  " + `${$(".udpMJPEG").val().trim()}` + "  Audio:  " + `${$(".audioMJPEG").val().trim()}`);
          doc.text(30, 170,  "Driver:  " + `${$(".gMJPEG").val().trim()}` + `${$(".urlMJPEGCheck").val().trim()}`);
          doc.text(30, 180, "MPEG4:  " + `${$(".mpeg4Check").val().trim()}` + "  TCP:  " + `${$(".tcpMPEG4").val().trim()}` + "  UDP:  " + `${$(".udpMPEG4").val().trim()}` + "  Audio:  " + `${$(".audioMPEG4").val().trim()}`);
          doc.text(30, 190,  "Driver:  " + `${$(".gMPEG4").val().trim()}` + `${$(".urlMPEG4Check").val().trim()}`);
          doc.text(10, 200, "Channel count:  " + `${$(".chCount").val().trim()}` + "   " + "Stream count:  " + `${$(".streamId").val().trim()}`);
          doc.text(10, 210, "User:  " + `${$(".uName").val().trim()}` + "   " + "Password:  " + `${$(".pWord").val().trim()}`);
          doc.text(10, 220, "PTZ Capable:  " + (`${$("#ptzs").val().trim()}`));
          doc.text(30, 230, "PTZ Driver Used:    " + `${$(".ptzDriverValue").val().trim()}` + "               " + "PTZ ID Used:  " + `${$(".ptzId").val().trim()}`);
          doc.text(30, 240, "Pan/Tilt Buttons:    " + (`${$("#panTilts").val().trim()}`) + "           " + "Zoom In/Out Buttons:  " + (`${$("#zooms").val().trim()}`));
          doc.text(30, 250, "Iris Buttons:    " + (`${$("#iriss").val().trim()}`) + "                  " + "Auto Iris:  " + (`${$("#aIRISs").val().trim()}`));
          doc.text(30, 260, "Focus Buttons:    " + (`${$("#focuss").val().trim()}`) + "             " + "Auto Focus:  " + (`${$("#aFocuss").val().trim()}`));
          doc.text(30, 270, "Preset Position Set:    " + (`${$("#presetSets").val().trim()}`) + "          " + "  Preset Position Show:  " + (`${$("#presetShows").val().trim()}`));
          doc.text(30, 280, "PTZ Speed Adjust:    " + (`${$("#ptzSppeds").val().trim()}`));


          doc.addPage();
          doc.rect(5, 5, 200, 290);
          doc.text(170, 10, `${dateString}`);
          doc.ellipse(100, 25, 50, 13, 'S');


          doc.setTextColor(231, 77, 61);
          doc.text(80, 20, 'Salient Systems');


          doc.setTextColor(100);
          doc.text(65, 30, 'Camera Certification Template');
          doc.text(10, 50, "FW Version:  " + (`${$(".fwVersion").val().trim()}`) + "   " + (`${$(".updated").val().trim()}`));
          doc.text(10, 60, "Dewarping:  " + (`${$("#dewarpings").val().trim()}`));
          doc.text(30, 70, "Dewarping Driver:  " + (`${$(".dewarpingT").val().trim()}`) +"  " + (`${$(".dewarpingP").val().trim()}`));
          doc.text(10, 80, "On-Camera events:  " + (`${$("#events").val().trim()}`));
          doc.text(10, 90, "Testing Level:  " + (`${$("#testLs").val().trim()}`));
          doc.text(10, 100, "Notes:  " + `${$(".note").val().trim()}`);

          doc.setTextColor(100);
          // Save the PDF
          doc.save(`${$(".manfu").val().trim()}` + "_" + `${$(".model").val().trim()}` + ".pdf");
        }
      })

    });