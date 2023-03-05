#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]


use tauri::Manager;
fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let splashscreen_window = app.get_window("splashscreen").unwrap();
      let main_window = app.get_window("main").unwrap();

      // disable the F5 key
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.keyCode == 116) { e.preventDefault(); }});").unwrap();
      main_window.eval("window.addEventListener('keydown', function(e) {if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { e.preventDefault(); }});").unwrap();
      Ok::<(), std::io::Error>(());

      // disable middle-click to open links in new windows
      main_window.eval("window.addEventListener('auxclick', function(e) {if (e.button == 1) { e.preventDefault(); }});").unwrap();
      // disable right click
      main_window.eval("window.addEventListener('contextmenu', function(e) { e.preventDefault(); });").unwrap();

      // we perform the initialization code on a new task so the app doesn't freeze
      tauri::async_runtime::spawn(async move {
        // initialize your app here instead of sleeping :)
        println!("Initializing...");
        std::thread::sleep(std::time::Duration::from_secs(5));
        println!("Done initializing.");

        // After it's done, close the splashscreen and display the main window
        splashscreen_window.close().unwrap();
        main_window.show().unwrap();
      });
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("failed to run app");
}
