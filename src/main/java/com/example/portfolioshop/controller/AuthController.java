package com.example.portfolioshop.controller;

import com.example.portfolioshop.dto.MemberDto;
import com.example.portfolioshop.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RequiredArgsConstructor
@Controller
public class AuthController {

    private final MemberService memberService;

    @PostMapping("/auth/register")
    public String register(MemberDto memberDto){
        memberService.save(memberDto);
        return "redirect:/auth/login";
    }

    @GetMapping("/auth/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response){
        new SecurityContextLogoutHandler().logout(request,response, SecurityContextHolder
                .getContext().getAuthentication());
        return "redirect:/auth/login";
    }

}
