$(document).ready(function() {
    var toastTrigger = document.getElementById('buttonEmail');
    var toastTrigger2 = document.getElementById('buttonNumber');
    var toastLiveExample = document.getElementById('liveToast');
    var strong = document.getElementById("strongid");
    var strong2 = document.getElementById("strongid2")

    if(toastTrigger) {
        toastTrigger.addEventListener('click', function () {
            strong.innerHTML = "support email"
            strong2.innerHTML = "just ask anything to: OdysseyTripAid@OdysseyTrip.com"
            var toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
        });

        toastTrigger2.addEventListener('click', function () {
            strong.innerHTML = "support number"
            strong2.innerHTML = "call us: 3246274463"
            var toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
        });
    }
});