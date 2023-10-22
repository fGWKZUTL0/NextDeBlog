import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

export default function DestroyModal(){
  const {isOpen, onOpen, onClose} = useDisclosure();
  
  return(
    <>
      <div className="w-fit h-full bg-orange-700 rounded-full" onClick={() => onOpen()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <Modal 
        size={"sm"} 
        isOpen={isOpen}
        placement="center"
        onClose={onClose} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                注意
              </ModalHeader>
              <ModalBody>
                <p>
                  この投稿を削除してもよろしいですか？
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  閉じる
                </Button>
                <Button color="danger" onPress={onClose}>
                  削除
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
