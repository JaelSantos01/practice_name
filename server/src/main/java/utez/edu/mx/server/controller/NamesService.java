package utez.edu.mx.server.controller;

import org.springframework.stereotype.Service;

@Service
public class NamesService {
    public String UnirNombres(String a, String b){
        return a + b;
    }
}
