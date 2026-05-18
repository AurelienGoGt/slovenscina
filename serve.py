#!/usr/bin/env python3
"""Lance un serveur local pour index.html — ouvre http://localhost:8080"""
import http.server, webbrowser, os, threading

PORT = 8080
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass  # silencieux

print(f"Serveur démarré → http://localhost:{PORT}")
print("Ctrl+C pour arrêter\n")
threading.Timer(0.5, lambda: webbrowser.open(f"http://localhost:{PORT}")).start()
http.server.HTTPServer(("", PORT), Handler).serve_forever()
