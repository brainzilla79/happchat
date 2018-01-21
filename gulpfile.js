var gulp = require("gulp");
var browserSync = require("browser-sync").create();

gulp.task("browser-sync", function() {
  browserSync.init({
    proxy: "localhost:3000",
    port: 3001,
    open: false,
    ui: {
      port: 3002
    }
  });
});

gulp.task(
  "dev",
  ["browser-sync"],
  function() {
    gulp.watch("*.scss", browserSync.reload);
    gulp.watch("*.html", browserSync.reload);
    gulp.watch("js/**/*.js", browserSync.reload);
    gulp.watch("*.jsx", browserSync.reload);
  }
);
