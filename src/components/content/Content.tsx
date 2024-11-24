import { HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { ShareDialog } from "./components/dialog/ShareDialog";
export const Content = () => {
  return (
    <VStack gapY="10px" marginY="50px">
      <ShareDialog />
      <Text fontSize="2xl" fontWeight="bold" color="#e4e4e7">
        ouj4k2q5
      </Text>
      <HStack gapX="20px">
        <Link
          href="https://www.youtube.com/@ouj4k2q5"
          color="#e4e4e7"
          aria-label="go to YouTube"
          _hover={{ color: "red.500", transform: "scale(1.1)" }}
          _active={{ transform: "scale(0.9)" }}
          _focus={{ color: "red.500", transform: "scale(1.1)" }}
          transition="all 0.5s ease-in-out"
          focusRingColor="blackAlpha.200"
        >
          <FaYoutube size="35px" />
        </Link>
        <Link
          href="https://x.com/ouj4k2q5"
          color="#e4e4e7"
          aria-label="go to Twitter"
          _hover={{ color: "blue.400", transform: "scale(1.1)" }}
          _active={{ transform: "scale(0.9)" }}
          _focus={{ color: "blue.400", transform: "scale(1.1)" }}
          transition="all 0.5s ease-in-out"
          focusRingColor="blackAlpha.200"
        >
          <FaXTwitter size="30px" />
        </Link>
      </HStack>
    </VStack>
  );
};
