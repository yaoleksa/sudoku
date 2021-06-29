## Simple server.

import socketserver

server_address=('192.168.0.100', 80)

class RequestHandlerClass:
    pass

socketserver.TCPServer(server_address, RequestHandlerClass, True)
