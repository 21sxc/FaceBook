<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Upload images to server using Node JS</title>
    <script src="Scripts/jquery-3.1.1.min.js"></script>
    <script src="Scripts/jquery.form.min.js"></script>

</head>
<body>
    <form id="frmUploader" enctype="multipart/form-data" action="api/Upload/" method="post">
        <input type="file" name="imgUploader" multiple />
        <input type="submit" name="submit" id="btnSubmit" value="Upload" />
    </form>
</body>

</html>

