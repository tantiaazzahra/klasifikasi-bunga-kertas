$(document).ready(function () {
    $('#submit').click(function () {
        var formData = new FormData();
        var fileInput = $('#input')[0].files[0];
        if (!fileInput) {
            alert("Harap pilih gambar terlebih dahulu.");
            return;
        }
        formData.append('image', fileInput); // 'image' sesuai dengan nama parameter di server

        $.ajax({
            type: 'POST',
            url: '/proses',
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                $('#result').show();
                $('#class').text(response.kelas);
                $('#persentase').text(response.persentase);
            },
            error: function (xhr, status, error) {
                alert(xhr.responseJSON?.error || 'Terjadi kesalahan.');
            }
        });
    });
});