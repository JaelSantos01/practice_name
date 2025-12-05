package utez.edu.mx.server.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import utez.edu.mx.server.dto.NamesDto;
import utez.edu.mx.server.utils.APIResponse;

@RestController
@RequestMapping("/api/nom")
@CrossOrigin(origins = "*")
public class NamesController {
    private final NamesService service;

    public NamesController(NamesService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<?> names (@RequestBody NamesDto dto){
        String result = service.UnirNombres(dto.getName(), dto.getLastname());
        APIResponse response = new APIResponse(result, HttpStatus.OK, "Nombre completo generado");
        return  ResponseEntity.ok(response);
    }
}
